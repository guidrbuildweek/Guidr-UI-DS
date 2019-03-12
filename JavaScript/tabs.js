
class TabLink {
  constructor(element) {
    
     this.element = element;
    
    
     this.data = this.element.dataset.tab
    
     this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`); ;
    
     this.itemElement = new TabItem(this.itemElement);
     
   
    this.element.addEventListener('click', () => this.select());
    
  };

  select() {
    
     const links = document.querySelectorAll('.tabs-link');
    
    
     links.forEach(link => {
       
      link.classList.remove('tabs-link-selected')
        
     });
     
    
      this.element.classList.add('tabs-link-selected');
    
    
      this.itemElement.select();
  }
}

class TabItem {
  constructor(element) {
    
     this.element = element;
  }

  select() {
    
     const items = document.querySelectorAll('.tabs-item');
     
    
    Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
     
    
    this.element.classList.add('tabs-item-selected');
    TweenMax.to(this.element, 3 , {opacity:1})
  }
}

 


links = document.querySelectorAll('.tabs-link');

links.forEach(function(element){
  return new TabLink(element)
});
