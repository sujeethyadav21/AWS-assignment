from flask import Flask, request

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    name = request.form.get('name')
    age = request.form.get('age')
    return f"Hello {name}, you are {age} years old!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
