# Plan

### HTML

-home page
-div to hold list of items
-render each item after fetching from supabase

-detail page
-section and div container for item details
-link to home page in header

### Events

-load home page
-fetch all from Supabase
-DISPLAY all items
-loop through, render, append to container

-detail page load
-fetch single item by id
-render to page using item info
-use URLSearchParams to get item id

### Functions

    -fetch-utils => getItem, getItemById
    render-utils => renderItemCard, renderItemDetail

### Slices

1. Get all items to render on load
2. Make items clickable & redirect to detail page
3. Get detail page to render with correct details
4. Use URLSearchParams to dynamically populate id
