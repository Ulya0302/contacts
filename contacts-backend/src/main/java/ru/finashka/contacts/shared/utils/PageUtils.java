package ru.finashka.contacts.shared.utils;

import lombok.experimental.UtilityClass;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import ru.finashka.contacts.shared.dto.PagingParam;

@UtilityClass
public class PageUtils {
    private static final String DESC = "DESC";

    public static PageRequest toPageRequest(PagingParam pagingParam) {
        Sort orders = Sort.by(getDirection(pagingParam.getSortDirection()), pagingParam.getSortColumn());
        return PageRequest.of(pagingParam.getPageNumber(), pagingParam.getPageSize(), orders);
    }

    public static Sort.Direction getDirection(String direction) {
        if (DESC.equalsIgnoreCase(direction)) {
            return Sort.Direction.DESC;
        } else {
            return Sort.Direction.ASC;
        }
    }
}

