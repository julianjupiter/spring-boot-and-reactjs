package io.github.julianjupiter.springbootandreactjs.repository;

import io.github.julianjupiter.springbootandreactjs.entity.Hero;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeroRepository extends JpaRepository<Hero, Long> {
    Iterable<Hero> findByNameContainingIgnoreCase(String name);
}
