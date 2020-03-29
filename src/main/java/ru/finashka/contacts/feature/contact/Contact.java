package ru.finashka.contacts.feature.contact;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "CONTACTS")
@SequenceGenerator(name = "CONTACTS_SEQ", sequenceName = "CONTACTS_SEQ")
@Getter
@Setter
public class Contact {
    @Id
    @Column(name = "ID")
    @SequenceGenerator(name = "CONTACTS_SEQ", sequenceName = "CONTACTS_SEQ")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PHONE")
    private String phone;
}
