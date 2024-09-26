import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarModule,
    ButtonModule,
    CommonModule,
    RouterModule,
    BreadcrumbModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  visibleSidebar = true;
  activeMenu: string = '';
  activeSubMenu: string = '';
  items: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', url: '/home' };

  menuItems: {
    label: string;
    icon: string;
    url: string;
    subMenus?: { label: string; icon: string; url: string }[];
  }[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/home',
    },
    {
      label: 'Chemical Request',
      icon: 'pi pi-palette',
      url: '/chemical-request',
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      url: '/about',
    },
    {
      label: 'Master List',
      icon: 'pi pi-list',
      url: '/master',
    },
    {
      label: 'Checklist',
      icon: 'pi pi-check',
      url: '/checklist',
    },
  ];

  constructor(public router: Router) {}

  ngOnInit() {
    this.setActiveMenu();
    this.router.events.subscribe(() => {
      this.setActiveMenu();
    });
  }

  toggleSubMenu(menu: string): void {
    this.activeSubMenu = menu;
  }

  setActiveMenu() {
    const currentUrl = this.router.url;
    this.items = [];
    this.activeMenu = '';

    this.menuItems.forEach((item) => {
      if (currentUrl.includes(item.url)) {
        this.activeMenu = item.label.toLowerCase().replace(' ', '-');
        this.items.push({ label: item.label, icon: item.icon, url: item.url });

        if (item.subMenus) {
          item.subMenus.forEach((subMenu) => {
            if (currentUrl.includes(subMenu.url)) {
              this.activeSubMenu = subMenu.label
                .toLowerCase()
                .replace(' ', '-');
              this.items.push({
                label: subMenu.label,
                icon: subMenu.icon,
                url: subMenu.url,
              });
            }
          });
        }
      }
    });
  }
}
