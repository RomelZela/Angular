export interface Universities {
    universities: University[];
    name:             string;
    country:          string;

}

export interface University {
    web_pages:        string[];
    alpha_two_code:   string;
    "state-province": null | string;
    domains:          string[];
}
