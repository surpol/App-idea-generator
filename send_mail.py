from flask import Flask
from flask_mail import Mail, Message
from flask import Flask, render_template, request

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'namskek2@gmail.com'
app.config['MAIL_PASSWORD'] = 'coolBeans22'
app.config['MAIL_USERNAME'] = 'suryapolina2@gmail.com'
app.config['MAIL_PASSWORD'] = 'myWare99'
# app.config['MAIL_USERNAME'] = 'email'
# app.config['MAIL_PASSWORD'] = 'email password'
# app.config['MAIL_USERNAME'] = 'email'
# app.config['MAIL_PASSWORD'] = 'email password'
mail = Mail(app)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/send', methods=['GET','POST'])
def send():
	if request.method == 'POST':
		name = request.form['name']
		email = request.form['email']
		feedback = request.form['feedback']
		msg = Message(sender=email, recipients=['namskek2@gmail.com', 'suryapolina2@gmail.com'], body=feedback, subject=name)
		feedback = "Sent by: " + email + "\n" + "Feedback: " + request.form['feedback']
		msg = Message(sender=email, recipients=['suryapolina2@gmail.com', 'namskek2@gmail.com'], body=feedback, subject=name)
		mail.send(msg)
		return render_template('feedbackMessage.html', name=name)
	else: 
		return render_template('index.html')

@app.route('/idea', methods=['GET','POST'])
def idea():
	if request.method == 'POST':
		appName = request.form['appName']
		idea = request.form['idea']
		msg = Message(sender='namskek2@gmail.com', recipients=['namskek2@gmail.com', 'suryapolina2@gmail.com'],body=idea, subject='New Idea Submission')
		ideaEmail = request.form['ideaEmail']
		submission = "Sent by: " + ideaEmail + "\n" + "App Name: " + appName + "\n" + "Idea Description: " + idea
		msg = Message(sender='namskek2@gmail.com', recipients=['namskek2@gmail.com', 'suryapolina2@gmail.com'],body=submission, subject='New Idea Submission')
		mail.send(msg)
		return render_template('ideaMessage.html')
	else:
		return render_template('index.html')


if __name__ == '__main__':
	app.run(debug=True)
