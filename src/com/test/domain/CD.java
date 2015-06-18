package com.test.domain;

public class CD {

    private Integer id;
    private String name;
    private String type;
    private String style;
    private String image;
    private Boolean hot;

    public CD(int id, String name, String type, String style, String image) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.style = style;
        this.image = image;
    }
}
