# Generated by Django 3.2.16 on 2023-09-18 03:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'ordering': ('-date_created',)},
        ),
        migrations.RenameField(
            model_name='contact',
            old_name='date_create',
            new_name='date_created',
        ),
    ]
