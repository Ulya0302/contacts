package ru.finashka.contacts.feature.contact;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "CONTACTS")
@SequenceGenerator(name = "CONTACTS_SEQ", sequenceName = "CONTACTS_SEQ", allocationSize = 1)
@Getter
@Setter
public class Contact {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CONTACTS_SEQ")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "CREATED_DATE")
    private LocalDateTime createdDate;
}
