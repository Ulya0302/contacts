package ru.finashka.contacts.feature.contact;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactDto {
    private Long id;
    private String name;
    private String email;
    private String phone;
}
