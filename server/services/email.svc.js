var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
exports.sendEmail = function(from, subject, content) {
    var mail = new helper.Mail();

    var fromEmail = new helper.Email(from);
    mail.setFrom(fromEmail);

    mail.setSubject(subject);

    var personalization = new helper.Personalization();
    personalization.addTo(new helper.Email('smith.brandon.e.82@gmail.com'));
    personalization.addTo(new helper.Email('porter.josh@hotmail.com'));
    mail.addPersonalization(personalization);

    var content = new helper.Content('text/html', content);
    mail.addContent(content);

    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
});
    return sg.API(request);
}