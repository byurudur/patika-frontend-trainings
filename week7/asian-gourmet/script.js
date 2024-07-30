
const menu = [
    {
      id: 1,
      title: "Sushi",
      category: "Japanese",
      price: 12.99,
      img: "images/sushi.jpg",
      desc: `Fresh and delicious sushi made with high-quality ingredients.`,
    },
    {
      id: 2,
      title: "Ramen",
      category: "Japanese",
      price: 9.99,
      img: "images/ramen.jpg",
      desc: `A warm bowl of ramen with a rich and flavorful broth.`,
    },
    {
      id: 3,
      title: "Dim Sum",
      category: "Chinese",
      price: 7.99,
      img: "images/dim-sum.jpg",
      desc: `A variety of small dishes perfect for sharing.`,
    },
    {
      id: 4,
      title: "Pad Thai",
      category: "Thai",
      price: 10.99,
      img: "images/pad-thai.jpg",
      desc: `Stir-fried noodles with a mix of fresh vegetables and proteins.`,
    },
    {
      id: 5,
      title: "Kung Pao Chicken",
      category: "Chinese",
      price: 11.99,
      img: "images/kung-pao-chicken.jpg",
      desc: `Spicy and flavorful chicken stir-fry with peanuts and vegetables.`,
    },
    {
      id: 6,
      title: "Green Curry",
      category: "Thai",
      price: 13.99,
      img: "images/green-curry.jpg",
      desc: `A spicy and aromatic green curry with coconut milk.`,
    }
  ];
  
  // DOM Elements
  const sectionCenter = document.querySelector('.section-center');
  const btnContainer = document.querySelector('.btn-container');
  
  // Load items
  window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
      return `<article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo" />
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                  </header>
                  <p class="item-text">
                    ${item.desc}
                  </p>
                </div>
              </article>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
    const categories = menu.reduce(
      function(values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ['All']
    );
  
    const categoryBtns = categories
      .map(function(category) {
        return `<button class="filter-btn" type="button" data-id=${category}>
                  ${category}
                </button>`;
      })
      .join('');
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll('.filter-btn');
  
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === 'All') {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }
  