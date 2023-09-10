from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta:
        model = Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'published',
            'time_read',
            'category',
            'views',
        ]
class PostListSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta:
        model = Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'published',
            'time_read',
            'category',
            'views',
        ]