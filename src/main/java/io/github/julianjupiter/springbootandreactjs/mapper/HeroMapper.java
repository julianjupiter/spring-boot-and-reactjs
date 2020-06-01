package io.github.julianjupiter.springbootandreactjs.mapper;

import io.github.julianjupiter.springbootandreactjs.dto.HeroDto;
import io.github.julianjupiter.springbootandreactjs.dto.HeroRequestDto;
import io.github.julianjupiter.springbootandreactjs.entity.Hero;
import org.springframework.stereotype.Component;

@Component
public class HeroMapper {
    public Hero fromDtoToEntity(HeroRequestDto heroRequestDto) {
        return new Hero()
                .setName(heroRequestDto.getName());
    }

    public HeroDto fromEntityToDto(Hero hero) {
        return new HeroDto()
                .setId(hero.getId())
                .setName(hero.getName());
    }
}
