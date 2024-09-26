from flask import Flask, jsonify
from flask_cors import CORS 
import boto3
import json

app = Flask(__name__)
CORS(app) 


s3 = boto3.client('s3')


@app.route('/movies', methods=['GET'])
def get_movies():
    try:
        obj = s3.get_object(Bucket='mymoviecornerbucket', Key='MovieList.json')
        data = obj['Body'].read().decode('utf-8')
        # print("Raw data from S3:", data)  
        movies = json.loads(data)
        return jsonify(movies)
    except Exception as e:
        print(f"Error: {e}") 
        return jsonify({"error": str(e)}), 500



@app.route('/movies/<int:id>', methods=['GET'])
def get_movie_details(id):
    try:
        obj = s3.get_object(Bucket='mymoviecornerbucket', Key='MovieReviews.json')
        movie_details = json.loads(obj['Body'].read().decode('utf-8'))
        movie = next((movie for movie in movie_details if movie['id'] == id), None)
        if movie:
            return jsonify(movie)
        else:
            return jsonify({"error": "Movie not found"}), 404
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
