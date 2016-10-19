import { Component, Input } from '@angular/core';

@Component({
  selector: 'enquiry-chat',
  templateUrl: './app/templates/chat-window.html',
})
export class EnquiryChatComponent {
  @Input() enquiry;
}
