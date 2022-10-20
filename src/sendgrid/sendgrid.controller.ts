/* eslint-disable prettier/prettier */
// import { Controller } from '@nestjs/common';

// @Controller('sendgrid')
// export class SendgridController {}

import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Controller('mail')
export class MailController {
    constructor(private readonly sendgridService: SendgridService) { }

    // Here we use query parameter to get the email that we want to send
    //   'send-email'
    @Post()
    async sendEmail(@Query('email') email) {
        console.log('mail controller-request')
        const mail = {
            to: email,
            subject: 'Hello from sendgrid',
            from: 'r0533145417@gmail.com', // Fill it with your validated email on SendGrid account
            text: 'Hello',
            html: '<h1>Hello</h1>',
        };
        console.log(mail);
        return await this.sendgridService.send(mail);
    }

    @Post('/confirm')
    async sendEmailConfirm(@Query('email') email) {
        console.log('mail controller-approve')
        const mail = {
            to: email,
            subject: 'Your request for marker confirm🎯',
            from: 'searhsystem@gmail.com',
            text: 'Hello',
            html: `<h1>
             your request for open system confirm by admin, your marker added!!
          <h1/>
          <p>we happy for u, good luck🎉</p>
          `
        };
        console.log(mail);
        return await this.sendgridService.send(mail);
    }

}
