from django.urls import path
from .views import NoteList, NoteDetail

urlpatterns = [
    path('notes/', NoteList.as_view()),
    path('notes/<pk>/', NoteDetail.as_view()),
]