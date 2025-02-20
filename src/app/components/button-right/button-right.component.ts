import { Component } from '@angular/core';

@Component({
  selector: 'app-button-right',
  standalone: true,
  imports: [],
  templateUrl: './button-right.component.html',
  styleUrl: './button-right.component.css'
})
export class ButtonRightComponent {
  isOpen = false; // Mặc định menu đóng

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
