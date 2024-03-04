from django.db import models
from django.utils import timezone

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=200)
    subject = models.CharField(max_length=200)
    message = models.TextField(blank=True)
    buget = models.CharField(max_length=100, blank=True)
    date_created = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-date_created',)

    def __str__(self):
        return self.email
