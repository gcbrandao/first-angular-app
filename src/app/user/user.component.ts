import { Component, computed, signal, Input, input, Output, EventEmitter, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

//const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length)


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // using here this way when use Input-decorator
  @Input({ required:true })  id!: string;
  @Input({ required: true }) avatar!: string; 
  @Input({ required: true }) name!: string; 
  // usonf decorator
  @Output() select = new EventEmitter<string>();

  //select = output<string>();


  // here using with input function
  // avatar = input<string>(''); // <T generics>
  // avatar = input.required<string>();
  // name = input.required<string>();

  // here is how to use with signal-reactive
  //selectedUser = signal(DUMMY_USERS[randonIndex]);
  //imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar)

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // }
  // );

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectedUser() {
    // here using signal to event-change
    // const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randonIndex]);    

    this.select.emit(this.id);

  }

}
