package io.github.julianjupiter.springbootandreactjs.service;

import io.github.julianjupiter.springbootandreactjs.dto.HeroDto;
import io.github.julianjupiter.springbootandreactjs.dto.HeroRequestDto;

import java.util.Optional;

public interface HeroService {
    Iterable<HeroDto> findAll();
    Optional<HeroDto> findById(long id);
    Iterable<HeroDto> findByName(String name);
    HeroDto save(HeroRequestDto heroRequestDto, long id);
    void deleteById(long id);
}
