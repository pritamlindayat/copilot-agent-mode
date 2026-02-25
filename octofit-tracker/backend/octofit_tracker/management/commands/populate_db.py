from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from octofit_tracker.models import Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create Teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create Users (Superheroes)
        tony = User.objects.create_user(username='ironman', email='tony@marvel.com', password='password', team=marvel)
        steve = User.objects.create_user(username='captainamerica', email='steve@marvel.com', password='password', team=marvel)
        bruce = User.objects.create_user(username='batman', email='bruce@dc.com', password='password', team=dc)
        clark = User.objects.create_user(username='superman', email='clark@dc.com', password='password', team=dc)

        # Create Activities
        Activity.objects.create(user=tony, type='running', points=50)
        Activity.objects.create(user=steve, type='walking', points=30)
        Activity.objects.create(user=bruce, type='strength', points=40)
        Activity.objects.create(user=clark, type='running', points=60)

        # Create Workouts
        Workout.objects.create(user=tony, description='Chest day', duration=45)
        Workout.objects.create(user=steve, description='Leg day', duration=40)
        Workout.objects.create(user=bruce, description='Cardio', duration=30)
        Workout.objects.create(user=clark, description='Full body', duration=50)

        # Create Leaderboard
        Leaderboard.objects.create(team=marvel, points=80)
        Leaderboard.objects.create(team=dc, points=100)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
