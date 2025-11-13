// details.js - Only details-specific functionality

// Complete Activities Data for all 6 activities
const allActivitiesData = {
    1: {
        id: 1,
        title: "Mountain Trekking Adventure",
        location: "Pokhara, Nepal",
        rating: 4.8,
        totalReviews: 156,
        description: "Experience the breathtaking beauty of the Annapurna range with our guided mountain trekking adventure. This journey takes you through lush forests, traditional villages, and high-altitude landscapes offering panoramic views of some of the world's highest peaks.",
        price: "Rs. 8,000 per person",
        duration: "5 Days",
        features: ["Professional Guide", "Accommodation", "Meals Included", "Permit Processing"],
        images: [
            "https://plus.unsplash.com/premium_photo-1661833879387-1513bf753554?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300",
            "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=300",
            "https://images.unsplash.com/photo-1683044414176-0e0d42b6fddf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluJTIwdHJla2tpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=300",
            "https://media.istockphoto.com/id/1361421117/photo/hiking-couple-climb-up-mountain-ridge.webp?a=1&b=1&s=612x612&w=0&k=20&c=0XwZPFE1ZRqbkTUXewsuUv1KqpchQyDxmfrCi1UDk08="
        ],
        timeSlots: [
            { time: "6:00 AM", available: true, slotsRemaining: 5 },
            { time: "7:30 AM", available: true, slotsRemaining: 8 },
            { time: "9:00 AM", available: false, slotsRemaining: 0 },
            { time: "10:30 AM", available: true, slotsRemaining: 3 }
        ],
        reviews: [
            {
                id: 1,
                userName: "Alex Thompson",
                userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                rating: 5.0,
                comment: "Absolutely incredible experience! The guides were knowledgeable and the views were beyond spectacular.",
                date: "2024-02-10"
            },
            {
                id: 2,
                userName: "Maria Garcia",
                userAvatar: "https://plus.unsplash.com/premium_photo-1688350839154-1a131bccd78a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFkeSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
                rating: 4.5,
                comment: "Challenging but rewarding trek. The sunrise view from Poon Hill was worth every step.",
                date: "2024-01-28"
            }
        ]
    },
    2: {
        id: 2,
        title: "Cultural Heritage Tour",
        location: "Lalitpur, Nepal",
        rating: 4.5,
        totalReviews: 89,
        description: "Immerse yourself in the rich cultural heritage of Patan, known for its ancient architecture, intricate wood carvings, and traditional Newari culture.",
        price: "Rs. 3,500 per person",
        duration: "6 Hours",
        features: ["Expert Guide", "Entrance Fees", "Traditional Lunch", "Artisan Visits"],
        images: [
            "https://insidehimalayas.com/wp-content/uploads/2018/05/8607410916_3764f3530f_b-1024x683.jpg",
            "https://images.unsplash.com/photo-1699204121879-f7d805d3bc41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0YW4lMjBkdXJiYXIlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
            "https://images.unsplash.com/photo-1761918533206-76652cf0ec74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhdGFuJTIwZHVyYmFyJTIwc3F1YXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
            "https://media.istockphoto.com/id/1777248712/photo/carved-wood-wall-decoration-in-patan-durbar-square-royal-medieval-palace-and-unesco-world.webp?a=1&b=1&s=612x612&w=0&k=20&c=GCi1xdu_xDxL1Ov1roEH3JRuWtVjjGvtaaLj_9YY7Zo="
        ],
        timeSlots: [
            { time: "8:00 AM", available: true, slotsRemaining: 7 },
            { time: "10:00 AM", available: true, slotsRemaining: 4 },
            { time: "1:00 PM", available: true, slotsRemaining: 6 },
            { time: "3:00 PM", available: false, slotsRemaining: 0 }
        ],
        reviews: [
            {
                id: 1,
                userName: "James Wilson",
                userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                rating: 4.0,
                comment: "Fascinating tour of Patan's cultural sites. The guide was very knowledgeable about local history.",
                date: "2024-02-15"
            }
        ]
    },
    3: {
        id: 3,
        title: "Wildlife Safari Experience",
        location: "Chitwan, Nepal",
        rating: 4.7,
        totalReviews: 134,
        description: "Explore the lush jungles of Chitwan National Park, home to rare wildlife including the Bengal tiger, one-horned rhinoceros, and various bird species.",
        price: "Rs. 6,500 per person",
        duration: "2 Days",
        features: ["Jungle Safari", "Elephant Ride", "Bird Watching", "Cultural Show"],
        images: [
            "https://plus.unsplash.com/premium_photo-1686310335921-38acc0679321?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
            "https://plus.unsplash.com/premium_photo-1664302697540-1406401126ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpdHdhbiUyMHdpbGRsaWZlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
            "https://media.istockphoto.com/id/545594278/photo/asian-elephant-in-bardia-national-park-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z2LzYaHXkwLGaI0c9bPQtn-_EoKjQPeMlQsn2VZ6tbg=",
            "https://images.unsplash.com/photo-1549888668-19281758dfbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpdHdhbiUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
        ],
        timeSlots: [
            { time: "7:00 AM", available: true, slotsRemaining: 2 },
            { time: "9:30 AM", available: true, slotsRemaining: 5 },
            { time: "2:00 PM", available: true, slotsRemaining: 3 },
            { time: "4:00 PM", available: false, slotsRemaining: 0 }
        ],
        reviews: [
            {
                id: 1,
                userName: "Robert Chen",
                userAvatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
                rating: 4.5,
                comment: "Saw rhinos and many exotic birds! The elephant safari was a unique experience.",
                date: "2024-02-12"
            },
            {
                id: 2,
                userName: "Sarah Johnson",
                userAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
                rating: 5.0,
                comment: "Amazing wildlife sightings and knowledgeable guides. The Tharu cultural dance was beautiful!",
                date: "2024-01-30"
            }
        ]
    },
    4: {
        id: 4,
        title: "Everest Helicopter Ride",
        location: "Kathmandu, Nepal",
        rating: 4.9,
        totalReviews: 128,
        description: "Experience the ultimate adventure with a helicopter ride offering breathtaking views of the Himalayas including Mount Everest. A thrilling way to see landscapes from a whole new perspective.",
        price: "Rs. 15,000 per person",
        duration: "3 Hours",
        features: ["Professional Pilot", "Safety Equipment", "Mountain Views", "Photo Opportunities"],
        images: [
            "https://plus.unsplash.com/premium_photo-1661885034037-8fe3d10c9c66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVsaWNvcHRlciUyMG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
            "https://plus.unsplash.com/premium_photo-1742418121817-0af1a4fdf6a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlbGljb3B0ZXIlMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=800",
            "https://media.istockphoto.com/id/898208706/photo/goup-of-climbers-in-the-himalayas.webp?a=1&b=1&s=612x612&w=0&k=20&c=bNHc3rVGI90yaVG4FGf9fzHxgbOyDuxfUpskHf3hVO4=",
            "https://media.istockphoto.com/id/1187709043/photo/medical-rescue-helicopter-landing-in-high-altitude-himalayas-mountains-safety-and-travel.webp?a=1&b=1&s=612x612&w=0&k=20&c=B2Zi6ylVEWJ6BI2AHuS1WjvM7xAqsUGy1-okR8dXfIA="
        ],
        timeSlots: [
            { time: "7:00 AM", available: false, slotsRemaining: 0 },
            { time: "9:00 AM", available: true, slotsRemaining: 3 },
            { time: "11:30 AM", available: true, slotsRemaining: 7 },
            { time: "2:00 PM", available: true, slotsRemaining: 2 }
        ],
        reviews: [
            {
                id: 1,
                userName: "Julia Jules",
                userAvatar: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFkeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400",
                rating: 5.0,
                comment: "Amazing views and a smooth flight. Pilot was professional and safety briefing was clear.",
                date: "2024-01-15"
            },
            {
                id: 2,
                userName: "Michael Chen",
                userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                rating: 4.0,
                comment: "Great experience overall! The views were breathtaking. Only wish the flight was longer.",
                date: "2024-01-10"
            }
        ]
    },
    5: {
        id: 5,
        title: "White Water Rafting",
        location: "Trishuli River, Nepal",
        rating: 4.6,
        totalReviews: 95,
        description: "Experience the thrill of white water rafting in the Trishuli River with rapids ranging from grade 2 to 4. Perfect for both beginners and experienced rafters.",
        price: "Rs. 4,500 per person",
        duration: "1 Day",
        features: ["Safety Gear", "Expert Guides", "Lunch Included", "Transportation"],
        images: [
            "https://images.unsplash.com/photo-1629248457649-b082812aea6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjB3YXRlciUyMHJhZnRpbmd8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&q=60&w=400",
            "https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjB3YXRlciUyMHJhZnRpbmd8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&q=60&w=400",
            "https://images.unsplash.com/photo-1692205610985-fc4c1fcacd98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwd2F0ZXIlMjByYWZ0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400",
            "https://images.unsplash.com/photo-1641584495098-49cfceabd8e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdoaXRlJTIwd2F0ZXIlMjByYWZ0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
        ],
        timeSlots: [
            { time: "8:00 AM", available: true, slotsRemaining: 8 },
            { time: "10:00 AM", available: true, slotsRemaining: 5 },
            { time: "12:00 PM", available: false, slotsRemaining: 0 },
            { time: "2:00 PM", available: true, slotsRemaining: 4 }
        ],
        reviews: [
            {
                id: 1,
                userName: "David Miller",
                userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                rating: 4.5,
                comment: "Thrilling experience with excellent safety standards. The guides were fun and professional.",
                date: "2024-02-14"
            },
            {
                id: 2,
                userName: "Lisa Wang",
                userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                rating: 4.0,
                comment: "Perfect balance of adventure and safety. Even as a first-time rafter, I felt completely secure.",
                date: "2024-02-05"
            }
        ]
    },
    6: {
        id: 6,
        title: "Paragliding Experience",
        location: "Pokhara, Nepal",
        rating: 4.8,
        totalReviews: 167,
        description: "Soar like a bird above the beautiful Pokhara valley with paragliding experience. Take off from Sarangkot hill and enjoy breathtaking views of Phewa Lake and Annapurna range.",
        price: "Rs. 7,500 per person",
        duration: "2 Hours",
        features: ["Tandem Flight", "Professional Pilot", "Safety Equipment", "Photo/Video Package"],
        images: [
            "https://plus.unsplash.com/premium_photo-1663054309676-bb9d31c56f72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyYWdsaWRpbmd8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&q=60&w=400",
            "https://images.unsplash.com/photo-1471247511763-88a722fc9919?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyYWdsaWRpbmd8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&q=60&w=400",
            "https://images.unsplash.com/photo-1573507712396-586c2fc99b36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyYWdsaWRpbmd8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&q=60&w=400",
            "https://images.unsplash.com/photo-1694811401894-59f6a0f5237e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcmFnbGlkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
        ],
        timeSlots: [
            { time: "9:00 AM", available: true, slotsRemaining: 4 },
            { time: "11:00 AM", available: true, slotsRemaining: 6 },
            { time: "1:00 PM", available: true, slotsRemaining: 3 },
            { time: "3:00 PM", available: false, slotsRemaining: 0 }
        ],
        reviews: [
            {
                id: 1,
                userName: "Emma Davis",
                userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                rating: 5.0,
                comment: "Absolutely incredible! The views of the mountains and lake were breathtaking.",
                date: "2024-02-11"
            },
            {
                id: 2,
                userName: "Tom Anderson",
                userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                rating: 4.5,
                comment: "Bucket list experience! Smooth takeoff and landing. The thermal currents made for an exciting ride.",
                date: "2024-02-03"
            }
        ]
    }
};

// Utility Functions
function generateStarRating(rating) {
    return `<i class="fas fa-star" style="color: #FFD700; font-size: 13px;"></i> ${rating} out of 5`;
}

// UI Population Functions
function populateActivityDetails(activityData) {
    document.getElementById("activityTitle").textContent = activityData.title;
    document.getElementById("activityLocation").innerHTML = `<span class="location-text">${activityData.location}</span><span class="view-location">View Full Location</span>`;
    document.getElementById("activityRating").innerHTML = generateStarRating(activityData.rating);
    document.getElementById("activityDescription").textContent = activityData.description;

    document.getElementById("activityTags").innerHTML = `
        <span>${activityData.price}</span>
        <span>Duration: ${activityData.duration}</span>
        ${activityData.features.map((f) => `<span>${f}</span>`).join("")}
    `;

    populateImageGallery(activityData);
    populateTimeSlots(activityData);
    populateReviews(activityData);
}

function populateImageGallery(activityData) {
    const imageGridContainer = document.getElementById("imageGridContainer");

    if (activityData.images.length > 0) {
        imageGridContainer.innerHTML = '';
        
        // Create main image
        const mainImage = document.createElement('img');
        mainImage.className = 'main-grid-image';
        mainImage.src = activityData.images[0];
        mainImage.alt = activityData.title;
        
        // Create sub images
        const subImages = activityData.images.slice(1, 4).map((img, index) => {
            const subImg = document.createElement('img');
            subImg.className = 'sub-grid-image';
            subImg.src = img;
            subImg.alt = `${activityData.title} ${index + 2}`;
            
            subImg.addEventListener('click', function() {
                const currentMainSrc = mainImage.src;
                mainImage.src = this.src;
                this.src = currentMainSrc;
                
                document.querySelectorAll('.sub-grid-image').forEach(img => img.classList.remove('active'));
                this.classList.add('active');
            });
            
            return subImg;
        });

        imageGridContainer.appendChild(mainImage);
        subImages.forEach(img => imageGridContainer.appendChild(img));
        
        if (subImages.length > 0) {
            subImages[0].classList.add('active');
        }
    }
}

function populateTimeSlots(activityData) {
    document.getElementById("slotsContainer").innerHTML = activityData.timeSlots
        .map((slot) => `
            <div class="slot">
                <div class="slot-info">
                    <p class="time">Time: ${slot.time}</p>
                    <p class="slot-count">* ${slot.available ? `${slot.slotsRemaining} Slots Remaining` : "No Slots Remaining"}</p>
                </div>
                <button class="btn ${slot.available ? "active" : "disabled"}" ${!slot.available ? "disabled" : ""}>
                    ${slot.available ? "Book" : "Full"}
                </button>
            </div>
        `).join("");
}

function populateReviews(activityData) {
    document.getElementById("reviewsContainer").innerHTML = activityData.reviews
        .map((review) => `
            <div class="review">
                <img src="${review.userAvatar}" alt="${review.userName}">
                <div class="review-content">
                    <p class="reviewer-name">${review.userName}</p>
                    <p class="review-rating">${generateStarRating(review.rating)}</p>
                    <p class="review-text">${review.comment}</p>
                    <p class="review-date">${new Date(review.date).toLocaleDateString()}</p>
                </div>
            </div>
        `).join("");
}

// Data Fetching
async function fetchActivityData(activityId) {
    try {
        await new Promise(resolve => setTimeout(resolve, 800));
        return allActivitiesData[activityId] || allActivitiesData[1];
    } catch {
        return allActivitiesData[activityId] || allActivitiesData[1];
    }
}

// Event Listeners - REMOVED NAVBAR FUNCTIONALITY
function initializeEventListeners(activityData) {
    setupPopupHandlers();
    setupBookingHandlers(activityData);
}

function setupPopupHandlers() {
    document.getElementById("openSlots").onclick = () =>
        document.getElementById("slotOverlay").classList.add("show");
    
    document.getElementById("closeOverlay").onclick = () =>
        document.getElementById("slotOverlay").classList.remove("show");

    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('show');
            }
        });
    });

    document.getElementById("closeBookPopup").onclick = () =>
        document.getElementById("bookSlotOverlay").classList.remove("show");
}

function setupBookingHandlers(activityData) {
    function initializeBookingButtons() {
        document.querySelectorAll(".btn.active").forEach((btn) => {
            btn.onclick = (e) => {
                const slotElement = e.target.closest(".slot");
                const time = slotElement.querySelector(".time").textContent.replace("Time: ", "");
                const slot = activityData.timeSlots.find((s) => s.time === time);

                document.getElementById("slotOverlay").classList.remove("show");
                document.getElementById("bookSlotOverlay").classList.add("show");

                document.getElementById("selectedTime").textContent = `Time : ${time}`;
                document.getElementById("slotsRemainingText").textContent = `* ${slot.slotsRemaining} Slots Remaining`;

                document.getElementById("slotInput").value = "";
                document.getElementById("extraInfo").value = "";

                document.getElementById("confirmBook").onclick = () => {
                    const count = parseInt(document.getElementById("slotInput").value);
                    const extra = document.getElementById("extraInfo").value;

                    if (!count || count <= 0 || count > slot.slotsRemaining) {
                        alert(`Please enter a valid number of slots (1-${slot.slotsRemaining})`);
                        return;
                    }

                    alert(`✅ Booking Confirmed!\nActivity: ${activityData.title}\nTime: ${time}\nSlots: ${count}\nExtra: ${extra}`);
                    document.getElementById("bookSlotOverlay").classList.remove("show");
                };

                document.getElementById("cancelBook").onclick = () =>
                    document.getElementById("bookSlotOverlay").classList.remove("show");
            };
        });
    }

    setTimeout(initializeBookingButtons, 100);
}

// Main Application
async function loadActivityData() {
    const urlParams = new URLSearchParams(window.location.search);
    const activityId = urlParams.get("id") || 1;
    
    try {
        const activityData = await fetchActivityData(parseInt(activityId));
        populateActivityDetails(activityData);
        initializeEventListeners(activityData);
    } catch (error) {
        console.error("Error loading activity data:", error);
        document.getElementById("activityTitle").textContent = "Error loading activity";
        document.getElementById("activityDescription").textContent = "Sorry, we couldn't load the activity details. Please try again later.";
    }
}

// Initialize
document.addEventListener("DOMContentLoaded", loadActivityData);
