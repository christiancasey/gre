---
{{- $id := substr (sha256 now) 0 10 }}
gre_id: "{{ $id }}"
aliases: [/id/{{ $id }}]
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
latlon: [ 0, 0 ]
author: NAME_OF_AUTHOR
editor: NAME_OF_EDITOR
draft: true
---

# Province

<!--
[PROVINCE_NAME]({{<relref "../..">}})
Relref values may need to be edited to work properly.  Each .. is up one level.
-->

## Province Description

<!-- DESCRIPTION -->


# Location

<!--
[LOCATION_NAME]({{<relref "..">}}) \
[LOCATION_NAME (Pleiades)](https://pleiades.stoa.org/places/108751)
-->

## Location Description

<!-- LEAVE THIS BLANK FOR NOW -->

# Sublocation

<!--
[SUBLOCATION_NAME]({{<relref "..">}}) \
[SUBLOCATION_NAME](GEOREFERENCE LINK)
A sublocation is any area larger than an individual garden, but located within a location.  For example "Regio X Palatium".  I would always try to include a link to a controlled vocabulary here if possible. This ID may well be different from the Garden ID, e.g., Pompeii versus a Garden in one of the houses which has its own Pleiades ID.
-->

## Sublocation Description
<!-- DESCRIPTION -->


# Insula
<!-- Only where appropriate -->


# House
<!-- Only where appropriate -->


# Garden

<!-- NAME_OF_GARDEN -->


## Keywords

<!-- [piscinae](http://vocab.getty.edu/page/aat/300375619), []() -->

## Garden Description


## Maps

<!--
OLD WAY (DO NOT USE)
![alt_text](../../images/image_name.ext)
*CAPTION*

NEW WAY ↓↓↓↓
{{< figure src="../../images/image_name.ext" alt="ALT_TEXT" title="CAPTION" >}}
-->

## Plans

<!--
OLD WAY (DO NOT USE)
![alt_text](../../images/image_name.ext)
*CAPTION*

NEW WAY ↓↓↓↓
{{< figure src="../../images/image_name.ext" alt="ALT_TEXT" title="CAPTION" >}}
-->

## Images

<!--
OLD WAY (DO NOT USE)
![alt_text](../../images/image_name.ext)
*CAPTION*

NEW WAY ↓↓↓↓
{{< figure src="../../images/image_name.ext" alt="ALT_TEXT" title="CAPTION" >}}
-->

## Dates
<!-- Format: For now, include dates exactly as written in the document. We will revisit the question of date formatting once more data have been collected. -->
<!-- If no date, use "unspecified" -->

## Bibliography

<!--
- BIB_ENTRY [(worldcat)](WORLDCAT_LINK_URL)
-->

### Periodo ID

<!-- [PERIODO_ID](https://pleiades.stoa.org/places/PLEIADES_ID) -->

### Pleiades ID
<!-- N.B. This should be as specific as it can be, i.e., to the garden, sublocation, location, or province. -->

<!-- [PLEIADES_ID](https://pleiades.stoa.org/places/PLEIADES_ID) -->

### TGN ID
<!-- N.B. This should be as specific as it can be, i.e., to the garden, sublocation, location, or province. -->

<!-- [TGN_ID](http://vocab.getty.edu/page/tgn/TGN_ID) -->

## Contributor

<!-- [AUTHOR_NAME](AUTHOR_LINK) (ORCID: [ORCID_ID](https://orcid.org/ORCID_ID)) -->

## Publication date
<!-- Format: dd MONTH_NAME yyyy -->

<!-- DATE -->

## Related articles

<!-- Links to other related articles. Leave blank for now -->
