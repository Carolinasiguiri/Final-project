package com.project.project_backend.services.interfaces;

import com.project.project_backend.models.Category;

import java.util.List;
import java.util.Optional;

public interface ICategoryService {
    List<Category> list();
    Optional<Category> search(int id);
    Category add(Category object);
    Category edit(Category object);
    void delete(int id);
}
