interface IEmailService {
  Send(): void;
  SendTemplate(): void;
}

class EmailService implements IEmailService {
  Send(): void {
    console.log('Email Sent');
  }

  SendTemplate(): void {
    console.log('Email Template Sent');
  }
}

export default EmailService;
