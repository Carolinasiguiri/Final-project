package com.project.project_backend.services.interfaces;

import com.project.project_backend.models.Category;
import com.project.project_backend.models.Product;

import java.util.List;
import java.util.Optional;

public interface IProductoService {
    List<Product> list();
    Optional<Product> search(int id);
    Product add(Product object);
    Product edit(Product object);
    void delete(int id);
}
