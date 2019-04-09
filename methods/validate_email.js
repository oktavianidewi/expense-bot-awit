function validate(message)
{
    let content = message.content || '';
    if (!message || !message.type || message.type !== "text") {
        return  null;
    }

    var specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var mailformat = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

    if (content.match(specialchars)){
        if (content.match(mailformat)){
            return content.match(mailformat)[0];
        } else {
            return 'invalid email';
        }
    } else {
        return null;
    }    
}