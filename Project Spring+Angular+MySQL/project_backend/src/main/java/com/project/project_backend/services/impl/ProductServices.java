package com.project.project_backend.services.impl;

import com.project.project_backend.models.Product;
import com.project.project_backend.repository.ProductRepository;
import com.project.project_backend.services.interfaces.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServices implements IProductoService {
    @Autowired
    private ProductRepository repository;

    @Override
    public List<Product> list() {
        return repository.findAll();
    }

    @Override
    public Optional<Product> search(int id) {
        return repository.findById(id);
    }

    @Override
    public Product add(Product object) {
        return repository.save(object);
    }

    @Override
    public Product edit(Product object) {
        return repository.save(object);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }
}
