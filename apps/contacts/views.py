from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,permissions
import requests
from .models import Contact
from django.core.mail import send_mail

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        data = self.request.data
        name=data['name']
        email=data['email']
        subject=data['subject']
        message=data['message']
        phone=data['phone']
        budget=data['budget']
        try:
            send_mail(
                subject, 'Name: '+name 
                + '\nEmail: ' + email
                + '\nMessage: ' + message
                + '\nPhone: ' + phone
                + '\nBuget: ' + budget,
                'donra2210@gmail.com',
                ['donra2219@hotmail.com'],
                fail_silently=False
            )
            Contact.objects.create(
                name='name',
                email='email',
                subject='subject',
                message='message',
                phone='phone',
                budget='budget',
            )
            return Response({'success':'Message sent successfully'})
        except:
            return Response({'error':'Message not sent'})