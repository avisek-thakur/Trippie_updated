// recentbook.js - Only recentbook-specific functionality

/* CONFIG */
const ROWS_PER_PAGE = 10;

/* state for pagination */
let currentPage = 1;

// Table data functionality
const activities = [
    { sn: 1, name: "Everest Helicopter Ride", date: "2025/10/10", time: "10:30 PM", slots: 5 },
    { sn: 2, name: "Go Karting", date: "2025/11/10", time: "12:00 PM", slots: 1 },
    { sn: 3, name: "Bungee Jumping", date: "2025/11/15", time: "03:00 PM", slots: 3 },
    { sn: 4, name: "Paragliding Adventure", date: "2025/10/22", time: "02:30 PM", slots: 2 },
    { sn: 5, name: "White Water Rafting", date: "2025/09/18", time: "09:00 AM", slots: 4 },
    { sn: 6, name: "Mountain Biking", date: "2025/12/05", time: "11:00 AM", slots: 1 },
    { sn: 7, name: "Rock Climbing", date: "2025/11/28", time: "01:45 PM", slots: 2 },
    { sn: 8, name: "Zip Lining", date: "2025/10/15", time: "10:00 AM", slots: 3 },
    { sn: 9, name: "Hot Air Balloon", date: "2025/09/30", time: "06:00 AM", slots: 2 },
    { sn: 10, name: "Scuba Diving", date: "2025/12/12", time: "08:30 AM", slots: 1 },
    { sn: 11, name: "Safari Tour", date: "2025/11/20", time: "07:00 AM", slots: 6 },
    { sn: 12, name: "Skydiving", date: "2025/10/08", time: "01:00 PM", slots: 2 },
    { sn: 13, name: "Wine Tasting", date: "2025/09/25", time: "03:30 PM", slots: 4 },
];

document.addEventListener('DOMContentLoaded', function() {
    // Load table data
    loadTableData();
});

function loadTableData() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * ROWS_PER_PAGE;
    const pageData = activities.slice(start, start + ROWS_PER_PAGE);

    if (pageData.length === 0) {
        const row = document.createElement('div');
        row.className = 'body-row empty-state';
        row.innerHTML = '<div class="body-cell" style="width: 100%; justify-content: center; display: flex; align-items: center; height: 55px; grid-column: 1 / -1;">No recent bookings found</div>';
        tableBody.appendChild(row);
        return;
    }

    pageData.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'body-row';
        const globalIndex = start + idx + 1;
        row.innerHTML = `
            <div class="body-cell sn">${globalIndex}</div>
            <div class="body-cell activity">${escapeHtml(item.name || '')}</div>
            <div class="body-cell date">${escapeHtml(item.date || '')}</div>
            <div class="body-cell time">${escapeHtml(item.time || '')}</div>
            <div class="body-cell slots">${escapeHtml(String(item.slots || ''))}</div>
        `;
        tableBody.appendChild(row);
    });

    // Update pagination display and visibility
    updatePagination();
}

/* Update pagination display */
function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    const currentPageElement = document.getElementById('currentPage');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    
    // Show/hide pagination based on item count
    if (activities.length <= ROWS_PER_PAGE) {
        paginationContainer.style.display = 'none';
        return;
    } else {
        paginationContainer.style.display = 'flex';
    }

    // Update current page display
    currentPageElement.textContent = currentPage;
    
    // Update button states
    prevBtn.disabled = (currentPage === 1);
    nextBtn.disabled = (currentPage * ROWS_PER_PAGE >= activities.length);
    
    // Ensure buttons maintain their background color even when disabled
    if (prevBtn.disabled) {
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
    } else {
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }
    
    if (nextBtn.disabled) {
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
    } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

/* simple HTML-escape to avoid injection */
function escapeHtml(str){
    return String(str)
        .replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/"/g,'&quot;')
        .replace(/'/g,'&#39;');
}

/* pagination handlers */
function setupPaginationHandlers() {
    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) { 
            currentPage--; 
            loadTableData(); 
        }
    });
    
    document.getElementById('nextPage').addEventListener('click', () => {
        if (currentPage * ROWS_PER_PAGE < activities.length) { 
            currentPage++; 
            loadTableData(); 
        }
    });
}

// Initialize pagination handlers
setupPaginationHandlers();
