# Test Case: ProductStorage Class

## Description

Tests for the ⁠ ProductStorage ⁠ class managing product data from JSON.

## Preconditions

•⁠ ⁠⁠ datastorage.json ⁠ must exist.
•⁠ ⁠Jest installed.

## Test Cases

1.⁠ ⁠*Constructor*

- Valid data: successful instantiation.
- Missing data: throws ⁠ 'data storage missing' ⁠.

2.⁠ ⁠*has_info*

- Valid ID with info: returns ⁠ true ⁠.
- Invalid ID: returns ⁠ false ⁠.

3.⁠ ⁠*get_info*

- Valid ID: returns info object.
- Invalid ID: returns ⁠ null ⁠.

4.⁠ ⁠*get_All_products_By_type*

- Valid type: returns matching products.
- Invalid type: returns empty array.

5.⁠ ⁠*get_Price*

- Valid ID: returns price.
- Invalid ID: throws ⁠ 'nothing found with given searchValue' ⁠.

6.⁠ ⁠*get_product_colors*

- Valid ID: returns color array.
- Invalid ID: returns empty array.
