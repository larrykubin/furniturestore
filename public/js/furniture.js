$(document).ready(function() {
    var $products = $("#products");
    var $category = $("#category");
    
    $category.change(function() {
        $products.html('');
        
        io3d.furniture.search($category.val(), { limit: 50 }).then(function(results) {
        
            results.forEach(function(result) {
                console.log(result)
                if (result.images[0] && result.description) {
                    $products.append('<div class="col-md-4">' + 
                        '<div class="card mb-4 shadow-sm">' +
                        '<img class="card-img-top" src="' + result.images[0] + '" alt="Card image cap">' + 
                        '<div class="card-body">' + 
                        '<h4 class="text-truncate">' + result.name + '</h4>' + 
                        '<p class="card-text text-truncate">' + result.description.split("<br>")[0] + '</p>' + 
                        '<div class="d-flex justify-content-between align-items-center">' + 
                        '<div class="btn-group">' + 
                        '<button type="button" class="btn btn-sm btn-outline-secondary">Add to Cart</button>' + 
                        '<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>' + 
                        '</div>' + 
                        '<small class="text-muted">9 mins</small>' + 
                        '</div>' + 
                        '</div>' + 
                        '</div>' + 
                        '</div>'); 
                }       
            });

        });

    });

    $category.change();
});