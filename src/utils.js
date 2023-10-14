import moment from "moment/moment"
 
 export const analyze =(text) =>{
    if(text.includes('hi')||text.includes('hai')||text.includes('hello'))
    return 'Hi,How can i help you?'
else if(text.includes('date'))
return moment().format('MMM Do Y')
else if(text.includes('time'))
return moment().format('h:mm:ss a')
else if(text.includes('google link'))
return 'https://www.google.com'
else if(text.includes('interest'))
return 'Bank interest rate is 8.7 '
else if (text.includes('thank you'))
return 'Thanks for contacting me.Have a Nice day'
else if(text.includes('tell me the details of code decoder'))
return 'you go through this- https://codedecoderdeveloper.cloud/'
    return "I can't get you,Can you rephrase the message?"
}