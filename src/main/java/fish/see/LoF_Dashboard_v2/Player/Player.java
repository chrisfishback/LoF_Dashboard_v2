package fish.see.LoF_Dashboard_v2.Player;

import fish.see.LoF_Dashboard_v2.Team.Team;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String summonerName;
    private String tagline;
    private String rank;
    private String level;

    @ManyToOne
    @JoinColumn(name = "team_id")
    Team team;
}
