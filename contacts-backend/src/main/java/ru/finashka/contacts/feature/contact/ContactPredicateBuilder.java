package ru.finashka.contacts.feature.contact;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import org.apache.commons.lang3.StringUtils;

public class ContactPredicateBuilder {

    public static Predicate getPredicateFor(String contactFilter) {
        QContact contact = QContact.contact;
        BooleanBuilder br = new BooleanBuilder();
        if (StringUtils.isNotBlank(contactFilter)) {
            br.or(contact.name.containsIgnoreCase(contactFilter))
                    .or(contact.email.containsIgnoreCase(contactFilter))
                    .or(contact.phone.containsIgnoreCase(contactFilter));
        }
        return br;
    }
}
