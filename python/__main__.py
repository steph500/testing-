import sys
from django.conf import settings
from django.urls import path
from django.http import JsonResponse
from django.core.management import execute_from_command_line

# 1. Configure minimal Django settings
if not settings.configured:
    settings.configure(
        DEBUG=True,
        ROOT_URLCONF=__name__,
        ALLOWED_HOSTS=['*'],
    )

# 2. Define the view
def greet(request):
    name = request.GET.get('name', '').strip()
    if name:
        return JsonResponse({'message': f'Hello, {name}'})
    return JsonResponse({'message': 'Hello, World'})

# 3. Define URL routing
urlpatterns = [
    path('api/greet/', greet, name='greet'),
]

# 4. Execute the command line utility
if __name__ == '__main__':
    execute_from_command_line(sys.argv)