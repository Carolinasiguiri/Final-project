package com.project.project_backend.services.impl;

import com.project.project_backend.models.Category;
import com.project.project_backend.repository.CategoryRepository;
import com.project.project_backend.services.interfaces.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServices implements ICategoryService {
    @Autowired
    private CategoryRepository repository;

    @Override
    public List<Category> list() {
        return repository.findAll();
    }

    @Override
    public Optional<Category> search(int id) {
        return repository.findById(id);
    }

    @Override
    public Category add(Category object) {
        return repository.save(object);
    }

    @Override
    public Category edit(Category object) {
        return repository.save(object);
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }
}
