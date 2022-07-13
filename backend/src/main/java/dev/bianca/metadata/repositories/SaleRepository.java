package dev.bianca.metadata.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.bianca.metadata.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
