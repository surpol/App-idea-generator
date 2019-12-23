from flask import Flask
from flask_mail import Mail, Message
from flask import Flask, render_template, request

app = Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'suryapolina2@gmail.com'
app.config['MAIL_PASSWORD'] = 'myWare99'

mail = Mail(app)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/send', methods=['GET','POST'])
def send():
	if request.method == 'POST':
		name = request.form['name']
		email = request.form['email']
		feedback = request.form['message']
		msg = Message(sender=email, recipients=['suryapolina2@gmail.com'], body=feedback, subject=name)
		mail.send(msg)
		return 'Your message was sent'
	else: 
		return render_template('index.html')
if __name__ == '__main__':
	app.run(debug=True)