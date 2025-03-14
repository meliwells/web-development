package com.example.favorite.data.model;


import jakarta.persistence.*;

import java.util.Objects;
import java.util.StringJoiner;
import java.util.UUID;

@Entity
@Table(name = "Favorite")
public class Favorite {
    @Id
    int id;
    String brand;
    String location;
    String mostFavorite;
    int rank;

    public Favorite() {
    }

    public Favorite(int id, String brand, String location, String mostFavorite, int rank) {
        this.id = id;
        this.brand = brand;
        this.location = location;
        this.mostFavorite = mostFavorite;
        this.rank = rank;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getMostFavorite() {
        return mostFavorite;
    }

    public void setMostFavorite(String mostFavorite) {
        this.mostFavorite = mostFavorite;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getId(), getBrand(), getLocation(), getMostFavorite(), getRank());
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Favorite.class.getSimpleName() + "[", "]")
                .add("id=" + id)
                .add("brand='" + brand + "'")
                .add("location='" + location + "'")
                .add("mostFavorite='" + mostFavorite + "'")
                .add("rank=" + rank)
                .toString();
    }
}
