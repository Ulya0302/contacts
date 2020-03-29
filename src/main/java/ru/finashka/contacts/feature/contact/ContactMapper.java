package ru.finashka.contacts.feature.contact;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ContactMapper {
    ContactDto map(Contact contact);

    Contact map(ContactDto contactDto);
}
