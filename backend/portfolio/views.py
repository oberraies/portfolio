from django.core.mail import EmailMessage
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.conf import settings

def home(request):
    return HttpResponse("Bienvenue sur la page d'accueil.")

@csrf_exempt
@require_POST
def submit_form(request):
    # Récupération des données POST et fichiers
    name = request.POST.get('name')
    email = request.POST.get('email')
    message = request.POST.get('message')
    files = request.FILES.getlist('files')

    # Vérification des champs obligatoires
    if not name or not email or not message:
        return JsonResponse({'status': 'error', 'message': 'Champs requis manquants.'})

    # Préparation de l'email
    email_subject = f"Nouveau message de contact de {name}"
    email_body = f"Nom: {name}\nEmail: {email}\n\nMessage:\n{message}"

    mail = EmailMessage(
        subject=email_subject,
        body=email_body,
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.EMAIL_HOST_USER],
        reply_to=[email],
    )

    # Ajout des pièces jointes si présentes
    for f in files:
        mail.attach(f.name, f.read(), f.content_type)

    # Envoi de l'email et gestion des erreurs
    try:
        mail.send()
        return JsonResponse({'status': 'success', 'message': 'Message envoyé avec succès !'})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': f"Échec de l'envoi : {str(e)}"})
