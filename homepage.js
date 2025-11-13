// homepage.js - Only homepage-specific functionality

// Activities data
const activities = [
  {
    id: 1,
    name: "Mountain Trekking Adventure",
    location: "Pokhara, Nepal",
    rating: 4.8,
    image: "https://plus.unsplash.com/premium_photo-1661833879387-1513bf753554?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300"
  },
  {
    id: 2,
    name: "Cultural Heritage Tour",
    location: "Lalitpur, Nepal",
    rating: 4.5,
    image: "https://insidehimalayas.com/wp-content/uploads/2018/05/8607410916_3764f3530f_b-1024x683.jpg"
  },
  {
    id: 3,
    name: "Wildlife Safari Experience",
    location: "Chitwan, Nepal",
    rating: 4.7,
    image: "https://plus.unsplash.com/premium_photo-1686310335921-38acc0679321?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
  },
  {
    id: 4,
    name: "Everest Helicopter Ride",
    location: "Kathmandu, Nepal",
    rating: 4.9,
    image: "https://plus.unsplash.com/premium_photo-1661885034037-8fe3d10c9c66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVsaWNvcHRlciUyMG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
  },
  {
    id: 5,
    name: "White Water Rafting",
    location: "Trishuli River, Nepal",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
  },
  {
    id: 6,
    name: "Paragliding Experience",
    location: "Pokhara, Nepal",
    rating: 4.8,
    image: "https://plus.unsplash.com/premium_photo-1663054309676-bb9d31c56f72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyYWdsaWRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  // Search functionality
  const searchCircle = document.querySelector('.search-circle');
  if (searchCircle) {
    searchCircle.addEventListener('click', function () {
      alert('Search functionality will be implemented with backend integration');
    });
  }

  // Display activities
  displayActivities();
});

// Display activities function
function displayActivities() {
  const content = document.getElementById("content");

  if (!content) {
    console.error('Content container not found');
    return;
  }

  content.innerHTML = activities.map(activity => `
        <div class="cursor-pointer activity-card" data-activity-id="${activity.id}">
            <div class="max-h-[90%] w-full relative">
                <img
                    class="z-0 w-full h-60 rounded-3xl object-cover"
                    src="${activity.image}"
                    alt="${activity.name}"
                />
                <div class="absolute font-semibold bg-white text-black rounded-2xl p-2 bottom-2 right-2 z-10 text-sm">
                    ⭐ ${activity.rating} / 5
                </div>
            </div>
            <div class="py-2">
                <h3 class="font-bold text-xl text-gray-800">${activity.name}</h3>
                <p class="font-semibold text-lg text-gray-600">${activity.location}</p>
            </div>
        </div>
    `).join('');

  // Add click event listeners to activity cards
  document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', function () {
      const activityId = this.getAttribute('data-activity-id');
      window.location.href = `details.html?id=${activityId}`;
    });
  });
}
