from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("Bienvenue sur la page d'accueil.")

@csrf_exempt
@require_POST
def submit_form(request):
    name = request.POST.get('name')
    email = request.POST.get('email')
    message = request.POST.get('message')
    files = request.FILES.getlist('files')

    if not name or not email or not message:
        return JsonResponse({'status': 'error', 'message': 'Champs requis manquants.'})

    email_subject = f"Nouveau message de contact de {name}"
    email_body = f"Nom: {name}\nEmail: {email}\n\nMessage:\n{message}"

    mail = EmailMessage(
        subject=email_subject,
        body=email_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.EMAIL_HOST_USER],
        reply_to=[email],
    )

    for f in files:
        mail.attach(f.name, f.read(), f.content_type)

    try:
        mail.send()
        return JsonResponse({'status': 'success', 'message': 'Message envoyé avec succès !'})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': f"Échec de l'envoi : {str(e)}"})
