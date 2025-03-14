package com.example.favorite.controller;


import com.example.favorite.data.model.Favorite;
import com.example.favorite.data.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/favorites")
public class FavoriteController implements Serializable {
    @Autowired
    FavoriteRepository favoriteRepository;

    @GetMapping()
    public List<Favorite> getResource() {
        return favoriteRepository.findAll();
    }

    @PostMapping
    public Favorite addTask(@RequestBody Favorite favorite) {
        System.out.println(favorite);
            return favoriteRepository.save(favorite);
        }
}
