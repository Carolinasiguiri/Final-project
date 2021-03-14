package com.project.project_backend.controllers.impl;

import com.project.project_backend.models.Category;
import com.project.project_backend.services.impl.CategoryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/api/categorias/"})
public class CategoryController {

    @Autowired
    CategoryServices service;

    @GetMapping
    public ResponseEntity<List<Category>> list(){
        return ResponseEntity.ok(service.list());
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Optional<Category>> search(@PathVariable("id") int id){
        return ResponseEntity.ok(service.search(id));
    }

    @PostMapping
    public ResponseEntity<Category> add(@RequestBody Category object){
        try {
            return ResponseEntity.ok(service.add(object));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping(path = {"/{id}"})
    public ResponseEntity<Category> edit(@RequestBody Category object, @PathVariable("id") int id){
        try {
            object.setId(id);
            return ResponseEntity.ok(service.edit(object));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<Void> delete(@PathVariable("id") int id){
        service.delete(id);
        return ResponseEntity.ok().build();
    }
}
