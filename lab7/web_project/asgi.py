# an entry point for ASGI-compatible web servers to serve your project.
# You typically leave this file as-is as it provides the hooks for production web servers.
"""
ASGI config for web_project project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'web_project.settings')

application = get_asgi_application()
