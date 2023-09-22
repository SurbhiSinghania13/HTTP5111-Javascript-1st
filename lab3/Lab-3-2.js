//LAB 3 - ARRAYS & LOOPS - PART 2


//PM TEAM MEMBER ARRAY
var team_member=["raj","heet","amit","saloni","karan"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(team_member);

//REMOVE LAST MEMBER
team_member.pop();
console.log(team_member);

//ADD SEAN TO FRONT OF ARRAY
team_member.unshift("sean");
console.log(team_member);

//REARRANGE THE ARRAY ALPHABETICALLY
var sort1=team_member.sort()
console.log(sort1);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have " + sort1.length + " people in our group");


//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for(var i=0;i<sort1.length;i++)
{
    console.log(sort1[i] + " is # " + (i+1) );

}

