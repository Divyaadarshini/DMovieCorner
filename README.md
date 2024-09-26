# D's Movie Corner - Personal Movie Review Web App

## Table of Contents

Overview
Features
Technologies
Setup Instructions
Future Advancements

#### Overview:

D's Movie Corner is a web application where users can view a list of movies and read reviews about them. Users can navigate through the application to see detailed information about each movie.

#### Features:

**Movie Listings:** Browse a selection of movies.
**Movie Reviews:** Access detailed reviews of movies.
**AWS Integration:** Fetch movie data and reviews from an AWS S3 bucket.
Responsive Design

#### Stack: ReactJS, Flask, Python, Boto3, AWS S3, AWS Amplify, AWS Cognito

#### Setup Instructions

**Pre-requisites**
AWS S3

**Step 1: Setup the Backend (Flask)**
Install Dependencies

```
pip install Flask flask-cors boto3
```

Run the Backend:

```
python3 app.py
```

**Step 2: Setup the Frontend (React)**
Install Dependencies:

```
npm install
```

Start the React App:

```
npm start
```

**Step 3: Access the Web App**
Open your browser and navigate to the [Hosted URL](https://dmc-dev.auth.eu-north-1.amazoncognito.com/login?response_type=code&client_id=uhoi5rbt1n0fhqcjfue4qd8at&redirect_uri=http://localhost:3000/movies/).

#### Future Enhancements:

* Enhanced UI/UX for better user experience.
* Implementing functionalities such as
  * **Search Functionality:** Implement a search bar to allow users to search for movies by title, genre, or actor.
  * **Comment Section:** Add a comment section under each movie review for users to discuss and share thoughts.
  * **Trending Movies:** Feature trending or popular movies on the homepage to attract user interest.
  * **Image Compression:** Optimize movie images for faster loading times.
